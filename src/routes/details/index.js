import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Tag, Avatar } from 'antd'
import ReplyList from './replies'
const tabSchema = {
  all: '全部',
  good: '精华',
  share: '分享',
  ask: '问答',
  job: '招聘',
  dev: '测试'
}
class Details extends Component {
  constructor(arg) {
    super(arg)
    let id = this.props.match.params.id
    this.state = {
      id,
      data: this.props.data,
      loading: this.props.loading
    }
  }
  componentDidMount() {
    const { id } = this.state
    this.updata(id)
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      loading: nextProps.loading
    })
  }
  updata(id) {
    const { dispatch } = this.props
    dispatch({
      type: 'details/fetchDetailsById',
      payload: {
        id
      }
    })
  }
  render() {
    const { data, loading } = this.props
    const { reply_count, replies } = data
    const Title = (
      <div>
        <h2>{data.title}</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Tag color={data.top ? 'magenta' : data.good ? 'green' : 'geekblue'}>{data.top ? '置顶' : data.good ? '精华' : tabSchema[data.tab] ? tabSchema[data.tab] : '分享'}</Tag>
          <Avatar src={data.author.avatar_url} style={{ margin: '0 5px' }} size="small" />
          <Link to={'/user/' + data.author.loginname}>{data.author.loginname}</Link>
          <span style={{ marginLeft: '5px' }}>发表于：{data.create_at.split('T')[0]}</span>
        </div>
      </div>
    )
    return (
      <div className="mainWrap" id="detailsWrap">
        <Card loading={loading} title={Title}>
          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </Card>
        <ReplyList loading={loading} reply_count={reply_count} replies={replies}></ReplyList>
      </div>
    )
  }
}
export default connect(({ details }) => ({
  data: details.data,
  loading: details.loading
}))(Details)
