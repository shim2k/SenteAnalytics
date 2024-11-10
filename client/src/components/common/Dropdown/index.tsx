import React, { useState, useRef, useEffect } from 'react';

// Define a type that supports either strings or objects with value and display text
type DropdownOption = string | { value: string; display: string };

interface DropdownProps {
    options: DropdownOption[]; // Supports both string[] and object[]
    onSelect: (value: string) => void; // Callback function to handle option selection
    selectedValue: string; // Currently selected value
    isDisabled?: boolean;
    label?: string; // Optional label for the dropdown
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, selectedValue, label, isDisabled }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // Close dropdown on ESC key
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    // Get the display text for the option
    const getDisplayText = (option: DropdownOption): string => {
        if (typeof option === 'string') {
            return option;
        } else {
            return option.display;
        }
    };

    // Get the value for the option
    const getValue = (option: DropdownOption): string => {
        if (typeof option === 'string') {
            return option;
        } else {
            return option.value;
        }
    };

    const getSelectedValueDisplayText = (selectedValue: string): string | undefined => {
        const selectedOption = options.find((option) => getValue(option) === selectedValue);
        return selectedOption ? getDisplayText(selectedOption) : undefined;
    }

    return (
        <div className="relative mb-5.5 inline-block w-full">
            {label && (
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                    {label}
                </label>
            )}
            <button
                ref={trigger}
                onClick={() => !isDisabled && setDropdownOpen(!dropdownOpen)}
                className={`inline-flex w-full items-center justify-between rounded-md bg-primary px-5.5 py-3 font-medium text-white hover:bg-opacity-95 ${isDisabled ? 'opacity-50' : ''}`}
            >
                {getSelectedValueDisplayText(selectedValue) || "Select an option"}
                <svg
                    className={`fill-current transition-transform duration-200 ease-linear ${dropdownOpen && "rotate-180"}`}
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.564864 0.879232C0.564864 0.808624 0.600168 0.720364 0.653125 0.667408C0.776689 0.543843 0.970861 0.543844 1.09443 0.649756L5.82517 5.09807C5.91343 5.18633 6.07229 5.18633 6.17821 5.09807L10.9089 0.649756C11.0325 0.526192 11.2267 0.543844 11.3502 0.667408C11.4738 0.790972 11.4562 0.985145 11.3326 1.10871L6.60185 5.55702C6.26647 5.85711 5.73691 5.85711 5.41917 5.55702L0.670776 1.10871C0.600168 1.0381 0.564864 0.967492 0.564864 0.879232Z"
                        fill=""
                    />
                </svg>
            </button>

            <div
                ref={dropdown}
                className={`absolute left-0 top-full z-40 mt-2 w-full rounded-md border border-stroke bg-white py-3 shadow-card dark:border-strokedark dark:bg-boxdark ${dropdownOpen ? "block" : "hidden"
                    }`}
            >
                <ul className="flex flex-col">
                    {options.map((option) => (
                        <li key={getValue(option)}>
                            <button
                                onClick={() => {
                                    onSelect(getValue(option));
                                    setDropdownOpen(false);
                                }}
                                className="flex w-full px-5 py-2 font-medium hover:bg-whiter hover:text-primary dark:hover:bg-meta-4"
                            >
                                {getDisplayText(option)}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
