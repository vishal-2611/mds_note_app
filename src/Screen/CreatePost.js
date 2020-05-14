import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createNote, updateNote, deleteNote} from '../Redux/Action';
import {
  Text,
  Input,
  Item,
  Textarea,
  Header,
  Left,
  Right,
  Button,
} from 'native-base';

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
    };
    this.savePost = this.savePost.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.showButtons = this.showButtons.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    const {params} = this.props.route;
    const {post} = this.props;
    if (params !== undefined) {
      const {id} = this.props.route.params;
      this.setState({title: post[id].title, body: post[id].body});
    }
  }

  savePost() {
    const {title, body} = this.state;
    if (title.length > 0 && body.length > 0) {
      this.props.createNote({title, body});
      this.props.navigation.navigate('Home');
    }
  }
  updatePost() {
    const {title, body} = this.state;
    const {id} = this.props.route.params;
    if (title.length > 0 && body.length > 0) {
      this.props.updateNote({title, body, id: id});
      this.props.navigation.navigate('Home');
    }
  }

  handleOnChange(value, name) {
    this.setState({[name]: value});
  }

  showButtons() {
    const {params} = this.props.route;
    if (params !== undefined) {
      return (
        <Button onPress={this.updatePost} success>
          <Text>Update</Text>
        </Button>
      );
    }
    return (
      <Button onPress={this.savePost} success>
        <Text>Save</Text>
      </Button>
    );
  }

  deleteButton() {
    const {params} = this.props.route;
    const {post} = this.props;
    if (params !== undefined) {
      return (
        <Button
          danger
          onPress={() => {
            this.props.deleteNote({id: params.id, post});
            this.props.navigation.navigate('Home');
          }}>
          <Text>Delete</Text>
        </Button>
      );
    }
    return null;
  }

  render() {
    const {title, body} = this.state;
    return (
      <View>
        <Header transparent>
          <Left>{this.deleteButton()}</Left>
          <Right>{this.showButtons()}</Right>
        </Header>
        <Item regular>
          <Input
            placeholder="Note Title"
            onChangeText={value => this.handleOnChange(value, 'title')}
            value={title}
          />
        </Item>
        <Textarea
          rowSpan={5}
          bordered
          placeholder="Write your notes here"
          onChangeText={value => this.handleOnChange(value, 'body')}
          value={body}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({createNote, updateNote, deleteNote}, dispatch);

const mapStateToProps = state => ({post: state.userNotes});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePost);
