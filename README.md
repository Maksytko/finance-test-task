# React Test Task

Implemented bonus functionality:
- visual effects to highlight positive or negative changes in the prices.

Based on previous and current ticker price, calculate a changes visualized like + or - changes and percent changes.

- the possibility to switch on/off tickers by user 

With this possibility you can pause changes of needed ticker. When you click on pause button, data of ticker save in state of paused tickers data. In render time verified, if in state saved some ticker data, if yes, render saved ticker, if no, render ticker from backend.

- the possibility to switch on/off receive tickers from backend by user 

When you click on switcher button with data status "on", you call event "stop" and this pause a receive tickers from backend, if with "off", event "start" which resume receive tickers.

- the possibility to add/remove ticker from watching group

With this possibility you can add/remove ticker from favorite by click on add/remove button. When you click on add to favorite button, ticker name save in redux state in massive of favorites. In render time in all tickers list, in function getAllTickersWithoutFavorite verify if massive of favorites includes a ticker name if yes, render without favorite. Function getFavoriteTickers verify if massive includes ticker name, if yes render ticker in favorite list.

- search a ticker by name 

With this possibility you can found needed ticker by part or full name. When you change input value, you call function which change component state of filter, and after submit, value of this state save in redux state, and function which send a tickers from all tickers list, verify if tickers name includes a filter value.
