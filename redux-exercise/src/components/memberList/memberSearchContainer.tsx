import { connect } from 'react-redux';
import { MemberSearchComponent } from './components/memberSearch';
import { State } from '../../reducers';
import { organizationNameValue } from '../../actions/memberRequest';

const mapStateToProps = (state  :State) => ({
  organizationName: state.OrganizationNameRedurcer.organizationName,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name: string) => dispatch(organizationNameValue(name))
});

export const MembersSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberSearchComponent);
