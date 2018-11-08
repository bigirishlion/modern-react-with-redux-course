import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label htmlFor="title">{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="title" label="Title" component={this.renderField} />
                    <Field name="tags" label="Tags" component={this.renderField} />
                    <Field name="content" label="Post Content" component={this.renderField} />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-secondary">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {
    console.log(values); // -> {title: 'asdad', categories: 'sadasd' ...}
    const errors = {};

    // validate inputs from 'values'
    if (!values.title) {
        errors.title = 'Enter a title!';
    }
    if (!values.tags) {
        errors.tags = 'Enter a Tag!';
    }
    if (!values.content) {
        errors.content = 'Enter some Content!';
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);