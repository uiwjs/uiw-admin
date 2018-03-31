import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Row, Col, Card, List, Avatar } from 'uiw';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './Workplace.less'

export default class Workplace extends Component {
    render() {
        const pageHeaderContent = (
            <div className={styles.pageHeaderContent}>
                <div className={styles.avatar}>
                    <Avatar size='large' src="https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png">
                    </Avatar>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentTitle}>
                        早安，热巴，祝你开心每一天！
                    </div>
                    <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。</div>
                </div>
            </div>
        );
        const extraContent =(
            <div className={styles.extraContent}>
                <div className={styles.statItem}>
                    <p>项目数</p>
                    <p>56</p>
                </div>
                <div className={styles.statItem}>
                    <p>团队内排名</p>
                    <p>2<span> / 14</span></p>
                </div>
                <div className={styles.statItem}>
                    <p>项目访问</p>
                    <p>12345</p>
                </div>
            </div>
        );
        console.log(".extraContent",extraContent);
        return (
            <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}> 
            这里是内容
            </PageHeaderLayout>
            
            
        );
    }
}