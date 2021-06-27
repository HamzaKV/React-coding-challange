import React from 'react';
import { default as IconRoot } from '../nuclei/Icon';
import {
    FaHome,
    FaArrowLeft,
    FaCog,
    FaRedo,
    FaEllipsisH,
    FaSearch,
    FaUser,
    FaUsers,
    FaQuestionCircle,
    FaRegWindowClose,
    FaSignOutAlt,
    FaBars,
    FaAngleLeft,
    FaAngleRight,
    FaAngleDown,
    FaAngleUp,
    FaFacebookSquare,
    FaLinkedin,
    FaInstagram,
    FaRegCalendarAlt,
    FaEnvelopeOpenText,
    FaRegQuestionCircle,
    FaEdit,
    FaPlus,
    FaTrashAlt,
    FaUpload,
    FaFilter,
    FaPaperPlane,
    FaBook
} from 'react-icons/fa';

const sizes = {
    s1: '100px',
    s2: '75px',
    s3: '50px',
    s4: '25px',
    s5: '15px',
};

const tags = {
    home: FaHome,
    back: FaArrowLeft,
    settings: FaCog,
    refresh: FaRedo,
    more: FaEllipsisH,
    search: FaSearch,
    user: FaUser,
    community: FaUsers,
    question: FaQuestionCircle,
    close: FaRegWindowClose,
    logout: FaSignOutAlt,
    menu: FaBars,
    leftArrow: FaAngleLeft,
    rightArrow: FaAngleRight,
    downArrow: FaAngleDown,
    upArrow: FaAngleUp,
    facebook: FaFacebookSquare,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    calendar: FaRegCalendarAlt,
    messages: FaEnvelopeOpenText,
    help: FaRegQuestionCircle,
    edit: FaEdit,
    plus: FaPlus,
    trash: FaTrashAlt,
    upload: FaUpload,
    filter: FaFilter,
    send: FaPaperPlane,
    resource: FaBook
};

export interface IProps {
    type?: keyof typeof sizes;
    name?: keyof typeof tags;
    color: React.CSSProperties['color'];
}

const Icon = ({ type = 's1', name = 'home', color }: IProps) => (
    <IconRoot IconTag={tags[name]} color={color} size={sizes[type]} />
);

export default Icon;