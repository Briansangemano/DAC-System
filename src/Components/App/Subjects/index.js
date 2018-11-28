import { connect } from 'react-redux';
import Subjects from './view';
import { addSubject } from '../../../actions/subjects';

const mapStateToProps = state => ({
  subjects: state.subjects.list,
  isLoading: state.subjects.isLoading,
  error: state.subjects.error
});

const mapDispatchToProps = dispatch => ({
    addSubject: item => { addSubject(item) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subjects);
