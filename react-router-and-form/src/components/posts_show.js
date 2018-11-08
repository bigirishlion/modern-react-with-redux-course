import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost } from "../actions";

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>Posts</div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(null, { fetchPost })(PostsShow);