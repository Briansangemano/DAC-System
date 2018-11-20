import { connect } from 'react-redux';
import Classrooms from './view';
import { addClassroom } from '../../../actions/classrooms';

const mapStateToProps = state => ({
  classrooms: state.classrooms.list,
  isLoading: state.classrooms.isLoading,
  error: state.classrooms.error
});

const mapDispatchToProps = dispatch => ({
    addClassroom: item => { addClassroom(item) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Classrooms);
