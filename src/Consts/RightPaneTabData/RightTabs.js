import {ClientSearch,ClientAdd, TransactionPendingReceived, TransactionPendingSent, TransactionAll} from '../Consts';

export let ClientsTabs = [{id:ClientSearch,tab:"Search"},{id:ClientAdd, tab:"Add"}];

export var TransactionTabs = [{"Pending":[{id: TransactionPendingReceived , tab:"To Be Recieved"},{id: TransactionPendingSent , tab:"To Be Sent"}]},{id: TransactionAll,tab:"Transactions"}];