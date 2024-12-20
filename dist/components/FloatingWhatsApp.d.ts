import React from 'react';
export interface FloatingWhatsAppProps {
    /** Callback function fires on click */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** Callback function fires on submit with event and form input value passed */
    onSubmit?: (event: React.FormEvent<HTMLFormElement>, formValue: string) => void;
    /** Callback function fires on close */
    onClose?: () => void;
    /** Callback function fired when notification runs */
    onNotification?: () => void;
    /** Callback function called when notification loop done */
    onLoopDone?: () => void;
    /** Phone number in [intenational format](https://faq.whatsapp.com/general/contacts/how-to-add-an-international-phone-number) */
    phoneNumber: string;
    /** Account Name */
    accountName: string;
    /** Set chat box height */
    chatboxHeight?: number;
    /** Inline style applied to chat box */
    chatboxStyle?: React.CSSProperties;
    /** CSS className applied to chat box */
    chatboxClassName?: string;
    /** Change user avatar using [static assets](https://create-react-app.dev/docs/adding-images-fonts-and-files/) */
    avatar?: string;
    /** Text below the account username */
    statusMessage?: string;
    /** Text inside the chat box */
    chatMessage?: string;
    /** Input placeholder */
    placeholder?: string;
    /** Time delay after which the chatMessage is displayed (in seconds) */
    messageDelay?: number;
    /** Allow notifications (Disabled after user opens the chat box) */
    notification?: boolean;
    /** Time delay between notifications in seconds */
    notificationDelay?: number;
    /** Repeat notifications loop */
    notificationLoop?: number;
    /** Enable notification sound */
    notificationSound?: boolean;
    /** Inline style applied to notification */
    notificationStyle?: React.CSSProperties;
    /** CSS className applied to notification */
    notificationClassName?: string;
    /** Closes the chat box if click outside the chat box */
    allowClickAway?: boolean;
    /** Closes the chat box if `Escape` key is clicked */
    allowEsc?: boolean;
    /** Inline style  applied to the main wrapping `Div` */
    style?: React.CSSProperties;
    /** CSS className applied to the main wrapping `Div` */
    className?: string;
    /** Inline style applied to button */
    buttonStyle?: React.CSSProperties;
    /** CSS className applied to button */
    buttonClassName?: string;
}
export declare function FloatingWhatsApp({ onClick, onSubmit, onClose, onNotification, onLoopDone, phoneNumber, accountName, avatar, statusMessage, chatMessage, placeholder, messageDelay, allowClickAway, allowEsc, notification, notificationDelay, notificationLoop, notificationSound, notificationStyle, notificationClassName, buttonStyle, buttonClassName, chatboxHeight, chatboxStyle, chatboxClassName, style, className }: FloatingWhatsAppProps): JSX.Element;
