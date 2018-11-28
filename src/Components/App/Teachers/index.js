import { connect } from 'react-redux';
import Teachers from './view';
import { addTeacherThunk, getTeachersThunk } from '../../../actions/teachers';

const mapStateToProps = state => ({
  teachers: state.teachers.list,
  isLoading: state.teachers.isLoading,
  error: state.teachers.error
});

const mapDispatchToProps = dispatch => ({
    addTeacher: item => { dispatch(addTeacherThunk(item)) },
    getTeachers: () => { dispatch(getTeachersThunk()) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teachers);
