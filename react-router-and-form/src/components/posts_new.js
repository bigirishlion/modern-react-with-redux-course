import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label htmlFor="title">{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form>
                    <Field name="title" label="Title" component={this.renderField} />
                    <Field name="tags" label="Tags" component={this.renderField} />
                    <Field name="content" label="Post Content" component={this.renderField} />
                    <input type="submit" className="btn btn-primary" defaultValue="Submit" />
                    <Link to="/" className="btn btn-secondary">Cancel</Link>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);