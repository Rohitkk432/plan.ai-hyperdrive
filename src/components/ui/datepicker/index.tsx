// react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// helpers
import { renderDateFormat } from "./date-time.helper";

type Props = {
    renderAs?: "input" | "button";
    value: Date | string | null | undefined;
    onChange: (val: string | null) => void;
    handleOnOpen?: () => void;
    handleOnClose?: () => void;
    placeholder?: string;
    displayShortForm?: boolean;
    error?: boolean;
    noBorder?: boolean;
    className?: string;
    isClearable?: boolean;
    disabled?: boolean;
    maxDate?: Date;
    minDate?: Date;
};

export const CustomDatePicker: React.FC<Props> = ({
    renderAs = "button",
    value,
    onChange,
    handleOnOpen,
    handleOnClose,
    placeholder = "Select date",
    displayShortForm = false,
    error = false,
    noBorder = false,
    className = "",
    isClearable = true,
    disabled = false,
    maxDate,
    minDate,
}) => (
    <DatePicker
        placeholderText={placeholder}
        selected={value ? new Date(value) : null}
        onChange={(val) => {
            if (!val) onChange(null);
            else onChange(renderDateFormat(val));
        }}
        onCalendarOpen={handleOnOpen}
        onCalendarClose={handleOnClose}
        className={`${error ? "border-red-500 bg-red-100" : ""} ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${
            noBorder ? "" : "border border-gray-400"
        } w-full rounded-md border-none outline-none ${className}`}
        dateFormat="MMM dd, yyyy"
        isClearable={isClearable}
        disabled={disabled}
        maxDate={maxDate}
        minDate={minDate}
        calendarClassName="custom-datepicker"
    />
);
