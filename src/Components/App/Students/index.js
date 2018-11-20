import { connect } from 'react-redux';
import Students from './view';
import { addStudent } from '../../../actions/students';

const mapStateToProps = state => ({
  students: state.students.list,
  isLoading: state.students.isLoading,
  error: state.students.error
});

const mapDispatchToProps = dispatch => ({
    addStudent: item => { addStudent(item) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
