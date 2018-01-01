import React from 'react';
import axios from 'axios';


class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quote : '',
                  author : '',
                  tags : [],
                  copyright : ''}
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    axios.get('http://quotes.rest/qod.json?category=inspire')
      .then((res) => {
        let data = res.data.contents.quotes[0]
        this.setState({ quote : data.quote,
                        author : data.author,
                        tags : data.tags,
                        copyright : res.data.contents.copyright})
      })

  }

  getTags() {
    let tags = ''
    Object.values(this.state.tags).forEach((el, i) => {
      if (i === 0) {
        tags += el
      } else {
        tags += `, ${el}`
      }
    })
    return tags
  }

  render() {
    let quote = this.state.quote;
    let author = this.state.author;
    let tags = this.getTags();
    let copyright = this.state.copyright;

    return (
      <div>Quote of the Day
        <div>{quote}</div>
        <div>{author}</div>
        <div>Tags: {tags}</div>
        <div>Copyright: {copyright}</div>
      </div>
    )
  }
}

export default Quote;
