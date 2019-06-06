import { Platform } from 'react-native';

export const foregroundColor = '#ffffff';
export const backgroundColor = '#f4f4f4'; // Agenda's reservations bg color
export const separatorColor = '#e8e9ec'; // not in use

export const processedColor = '#a7e0a3';
export const processingColor = '#ffce5c';
export const failedColor = '#f67e7e';

export const textDefaultColor = '#262626';
export const textColor = '#262626';
export const textLinkColor = '#262626';
export const textSecondaryColor = '#262626';

export const textDayFontFamily = 'Avenir-Book';
export const textMonthFontFamily = 'Avenir-Book';
export const textDayHeaderFontFamily = 'Avenir-Book';

export const textDayFontWeight = '300';
export const textMonthFontWeight = '300';
export const textDayHeaderFontWeight = undefined;

export const textDayFontSize = 14;
export const textMonthFontSize = 16;
export const textDayHeaderFontSize = 13;

export const textDayStyle = undefined;
export const dotStyle = undefined;
export const arrowStyle = undefined;

export const calendarBackground = foregroundColor;
export const textSectionTitleColor = '#999999';
export const selectedDayBackgroundColor = '#46B877';
export const selectedDayTextColor = foregroundColor;
export const todayBackgroundColor = undefined;
export const todayTextColor = textLinkColor;
export const dayTextColor = textDefaultColor;
export const textDisabledColor = '#d9e1e8';
export const dotColor = '#46B877';
export const selectedDotColor = foregroundColor;
export const disabledDotColor = undefined;
export const todayDotColor = undefined;
export const arrowColor = textLinkColor;
export const monthTextColor = textDefaultColor;
export const indicatorColor = undefined; // use the default color of React Native ActivityIndicator
export const agendaDayTextColor = '#7a92a5';
export const agendaDayNumColor = '#7a92a5';
export const agendaTodayColor = textLinkColor;
export const agendaKnobColor = Platform.OS === 'ios' ? '#f2F4f5' : '#4ac4f7';
export const todayButtonTextColor = textLinkColor;
export const todayButtonPosition = undefined; // right' / 'left' (default)
