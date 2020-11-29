import React, { useEffect, useState } from 'react';
import { withTranslation, Link, Router } from '../i18n';
import BaseLayout from '../components/baseLayout';
import { getPost } from '../redux/postRedux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



function Post({ t, getPost, post }) {
    useEffect(() => {
        getPost(1);
    }, [])

    function renderPost() {
        return (post && post.post ? 
            <div>
                <div>id: {post.post.id}</div>
                <div>title: {post.post.title}</div>
                <div>body: {post.post.body}</div>
            </div> : null)
    }

    return (
        <BaseLayout title={'Post'}>
            <div>
                {t('post')}
            </div>
            <div>
                Status: {post.status}
            </div>
            {renderPost()}
        </BaseLayout>

    )
}

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getPost
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Post));