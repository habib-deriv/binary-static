import Duration  from '../Components/Form/TradeParams/duration.jsx';
import StartDate from '../Components/Form/TradeParams/start_date.jsx';
import LastDigit from '../Components/Form/TradeParams/last_digit.jsx';
import Amount    from '../Components/Form/TradeParams/amount.jsx';
import Barrier   from '../Components/Form/TradeParams/barrier.jsx';

export const form_components = [
    { name: 'start_date', Component: StartDate },
    { name: 'duration',   Component: Duration },
    { name: 'barrier',    Component: Barrier },
    { name: 'last_digit', Component: LastDigit },
    { name: 'amount',     Component: Amount },
];
