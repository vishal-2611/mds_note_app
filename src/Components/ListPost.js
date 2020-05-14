import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, CardItem, Body} from 'native-base';

class ListPost extends Component {
  constructor() {
    super();
    this.showPost = this.showPost.bind(this);
  }

  showPost() {
    const {post, navigation} = this.props;
    if (Object.keys(post).length > 0) {
      return Object.keys(post).map(item => (
        <TouchableOpacity
          key={item}
          onPress={() => navigation.navigate('CreatePost', {id: item})}>
          <Card>
            <CardItem header>
              <Text>{post[item].title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{post[item].body}</Text>
              </Body>
            </CardItem>
          </Card>
        </TouchableOpacity>
      ));
    }
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View
        style={{height: 500, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Create Notes</Text>
      </View>
    );
  }
  render() {
    return <View>{this.showPost()}</View>;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({post: state.userNotes});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPost);
