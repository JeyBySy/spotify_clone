import { Check, Grip, LayoutGrid, List, Menu } from 'lucide-react';
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react';

const SortTab = ({ sortOption, viewOption, onSortChange, onViewChange, onClose }) => {
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                if (!e.target.closest('[data-allow-outside]')) {
                    onClose();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    const sortOptions = [
        { label: 'Recents', value: 'recent' },
        { label: 'Recently added', value: 'recentlyAdded' },
        { label: 'Alphabetical', value: 'alphabetical' },
        { label: 'Creator', value: 'creator' },
    ];

    const viewOptions = [
        { icon: Menu, value: 'compactList' },
        { icon: List, value: 'defaultList' },
        { icon: Grip, value: 'compactGrid' },
        { icon: LayoutGrid, value: 'defaultGrid' },
    ];

    return (
        <div
            ref={ref}
            className="absolute right-6 w-[50%] top-full z-10 bg-neutral-800 p-1 rounded-md shadow-lg">
            <div className='py-1'>
                <h4 className="font-semibold mb-2 text-xs text-neutral-400 p-3">Sort by</h4>
                <div className="flex flex-col items-start  text-sm text-neutral-100">
                    {sortOptions.map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => onSortChange(label)}
                            className={`flex justify-between items-center hover:bg-neutral-700 px-3 text-sm py-2 w-full text-start ${sortOption === value ? 'text-green-500' : ''
                                }`}
                        >
                            <p>{label}</p>
                            {sortOption === value && <Check className="w-5 h-5 stroke-green-600" />}
                        </button>
                    ))}
                </div>
            </div>
            <hr className='border-neutral-700' />
            <div>
                <h4 className="font-semibold mb-2 text-neutral-400 text-xs p-3">View as</h4>
                <div className='bg-neutral-900 w-full p-1 flex flex-row justify-between rounded'>
                    {viewOptions.map(({ icon: Icon, value }) => (
                        <button
                            key={value}
                            onClick={() => onViewChange(value)}
                            className={` w-fit py-2 px-3 rounded ${viewOption === value ? 'bg-neutral-700' : ''}`}
                        >
                            <Icon className='w-5 h-5 stroke-white' />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

SortTab.propTypes = {
    sortOption: PropTypes.oneOf(['recent', 'recentlyAdded', 'alphabetical', 'creator']).isRequired,
    viewOption: PropTypes.oneOf(['compactList', 'defaultList', 'compactGrid', 'defaultGrid']).isRequired,
    onSortChange: PropTypes.func.isRequired,
    onViewChange: PropTypes.func.isRequired,
    onClose: PropTypes.func
};

export default SortTab;
