// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
// export default compose(
//   firestoreConnect([{ collection: 'poems', orderBy: ['date'] }, { collection: 'settings' }]),
//   connect((state, props) => ({
//     poems: state.firestore.ordered.poems,
//     settings: state.firestore.ordered.settings
//   }))
// )(Poems);