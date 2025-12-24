import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, className = '', title, ...props }) => {
    return (
        <FontAwesomeIcon
            icon={icon}
            className={className}
            title={title}
            {...props}
        />
    );
};

export default memo(Icon);
