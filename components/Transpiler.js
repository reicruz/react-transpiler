import React from 'react'
import ReactDOM from 'react-dom'

class Transpiler extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here*/',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    let code = e.target.value;
    try {
      document.getElementById('error').style.backgroundColor = "#99ff99"
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all',
        }).code,
        err: ''
      })
    }
    catch(err) {
      this.setState({err: err.message})
      document.getElementById('error').style.backgroundColor = "pink"
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <textarea onChange={this.update}
                    defaultValue={this.state.input}>
          </textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
        <div id="error">{this.state.err}</div>
      </div>
    )
  }
}

export default Transpiler
