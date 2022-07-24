import App from '../components/MyApp';
import { connect } from 'react-redux';
import { startAction } from '../redux/actions/startActions';
import { stopAction } from '../redux/actions/stopActions';
import { IState, IDispatch } from '../redux/store/store';
import { Action } from 'redux';
import { IStartAction } from '../redux/types/IStartAction'

const mapStateToProps = (state: IState) => ({
    ...state
});
  
const mapDispatchToProps = (dispatch: any) => ({
startAction: () => dispatch(startAction as IStartAction),
stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


