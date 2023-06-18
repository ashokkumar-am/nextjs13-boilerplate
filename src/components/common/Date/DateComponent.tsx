import { formatDistanceToNow } from 'date-fns';

interface DateComponentProps {
  date: Date | string;
}

const DateComponent: React.FC<DateComponentProps> = ({ date }) => {
  const formattedDate = typeof date === 'string' ? new Date(date) : date;
  const formattedDateString = formatDistanceToNow(formattedDate, { addSuffix: true });

  return <time dateTime={formattedDate.toISOString()}>{formattedDateString}</time>;
};

export default DateComponent;
