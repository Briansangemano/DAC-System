import { connect } from 'react-redux';
import Teachers from './view';
import { addTeacher } from '../../../actions/teachers';

const mapStateToProps = state => ({
  teachers: state.teachers.list,
  isLoading: state.teachers.isLoading,
  error: state.teachers.error
});

const mapDispatchToProps = dispatch => ({
    addTeacher: item => { addTeacher(item) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teachers);
