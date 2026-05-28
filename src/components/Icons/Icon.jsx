import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconsLibrary';

const Icon = ({ icon, className = '', title, ...props }) => (
    <FontAwesomeIcon
        icon={icon}
        className={className}
        title={title}
        aria-hidden={!title}
        focusable={false}
        {...props}
    />
);

export default Icon;
