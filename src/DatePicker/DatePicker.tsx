import * as React from "react";
import styles from "./DatePicker.module.css";
import rightArrow from "./right-arrow.svg";
import leftArrow from "./left-arrow.svg";

interface Props {
  locale: string;
  onDatePick: (date: Date) => void;
}

interface State {
  date: Date;
}

const getDaysInMonth = (date: Date) => {
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const days: Date[] = [];
  for (let i = 0; i < daysInMonth; i++) {
    days.push(new Date(date.getFullYear(), date.getMonth(), i + 1));
  }
  return days;
};

export default class DatePicker extends React.Component<Props, State> {
  static defaultProps = {
    locale: "is-IS",
    onDatePick: () => {}
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      date: new Date()
    };

    this.days = this.days.bind(this);
    this.month = this.month.bind(this);
  }

  selectDate(date: Date) {
    const { onDatePick } = this.props;

    onDatePick(date);
    this.setState({
      date
    });
  }

  days() {
    const { date } = this.state;
    const daysInMonth = getDaysInMonth(date);
    const days: JSX.Element[] = [];

    const offset = daysInMonth[0].getDay();
    for (let i = 0; i < 6; i++) {
      const daysInWeek: JSX.Element[] = [];
      for (let y = 0; y < 7; y++) {
        const d = y + 7 * i - offset;
        if (d <= -1) {
          daysInWeek.push(
            <td
              key={d}
              className={styles.td}
              style={{ backgroundColor: "#fff", cursor: "default" }}
            />
          );
        } else if (d >= daysInMonth.length) {
          break;
        } else {
          const actualDate = daysInMonth[d];
          daysInWeek.push(
            <td
              key={d}
              onClick={() => this.selectDate(actualDate)}
              className={`${styles.td} ${
                d + 1 === date.getDate() ? styles.selected : ""
              }`}
            >
              {actualDate.getDate()}
            </td>
          );
        }
      }
      days.push(
        <tr key={i} className={styles.tr}>
          {daysInWeek}
        </tr>
      );
    }

    return <>{days}</>;
  }

  month() {
    const { date } = this.state;
    const { locale } = this.props;

    return (
      <div className={styles.month}>
        <div
          className={styles.pager}
          onClick={() =>
            this.setState({
              date: new Date(date.getFullYear(), date.getMonth() - 1)
            })
          }
        >
          <img src={leftArrow} />
        </div>
        <div className={styles.monthDisplay}>
          {date.toLocaleDateString(locale, { month: "long", year: "numeric" })}
        </div>
        <div
          className={styles.pager}
          onClick={() =>
            this.setState({
              date: new Date(date.getFullYear(), date.getMonth() + 1)
            })
          }
        >
          <img src={rightArrow} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.card}>
        {this.month()}
        <div>
          <table>
            <thead>
              <tr className={styles.trTH}>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>{this.days()}</tbody>
          </table>
        </div>
        <div className={styles.selectedDate}>
          Selected: {this.state.date.toLocaleDateString(this.props.locale)}
        </div>
      </div>
    );
  }
}
