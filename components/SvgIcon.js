'use strict';

import React from 'react';
import classNames from 'classnames';
const contentHtml = {
   'dots': '<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
   '\t viewBox="0 0 490 490" style="enable-background:new 0 0 490 490;" xml:space="preserve">\n' +
   '<g>\n' +
   '\t<g>\n' +
   '\t\t<path fill="#484848" d="M245,185.5c-32.8,0-59.5,26.7-59.5,59.5s26.7,59.5,59.5,59.5s59.5-26.7,59.5-59.5S277.8,185.5,245,185.5z M280,245\n' +
   '\t\t\tc0,19.3-15.7,35-35,35s-35-15.7-35-35s15.7-35,35-35S280,225.7,280,245z"/>\n' +
   '\t\t<path fill="#484848" d="M185.5,430.5c0,32.8,26.7,59.5,59.5,59.5s59.5-26.7,59.5-59.5S277.8,371,245,371S185.5,397.7,185.5,430.5z M280,430.5\n' +
   '\t\t\tc0,19.3-15.7,35-35,35s-35-15.7-35-35s15.7-35,35-35S280,411.2,280,430.5z"/>\n' +
   '\t\t<path fill="#484848" d="M185.5,59.5c0,32.8,26.7,59.5,59.5,59.5s59.5-26.7,59.5-59.5S277.8,0,245,0S185.5,26.7,185.5,59.5z M280,59.5\n' +
   '\t\t\tc0,19.3-15.7,35-35,35s-35-15.7-35-35s15.7-35,35-35S280,40.2,280,59.5z"/>\n' +
   '\t</g>\n' +
   '</g>\n' +
   '</svg>\n',
}

export default (props) => {
    const externalClass  = props.layout ? { [props.layout]: true } : {};
    const componentClass = classNames({
        'c_svg': true,
        [`c_svg_${props.type}`]: true,
    }, externalClass);

    const content = contentHtml[props.type];

    return (
        <div
            className={componentClass}
            dangerouslySetInnerHTML={{ __html: content.replace('c_svg_icon', (props.active ? 'c_svg_icon active' : 'c_svg_icon')) }}
            onClick={props.onClick}
        />
    );
}

