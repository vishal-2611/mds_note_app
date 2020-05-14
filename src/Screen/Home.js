import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createNote, updateNote, deleteNote} from '../Redux/Action';
import {Button, Icon} from 'native-base';
import ListPost from '../Components/ListPost';
class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const {navigation} = this.props;
    return (
      <>
        <Button
          style={styles.newPost}
          onPress={() => navigation.navigate('CreatePost')}>
          <Text style={styles.plus}>+</Text>
        </Button>
        <ScrollView>
          <ListPost navigation={navigation} />
        </ScrollView>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({createNote, updateNote, deleteNote}, dispatch);

const mapStateToProps = state => ({mobile: state.userNotes});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = new StyleSheet.create({
  newPost: {
    backgroundColor: '#DD5144',
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 2,
    height: 50,
    width: 50,
    justifyContent: 'center',
    borderRadius: 50,
  },
  plus: {
    fontSize: 28,
    color: '#fff',
  },
});
