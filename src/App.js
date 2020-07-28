import React, { Component, Fragment } from 'react'
import './App.css'
import Member from './components/Member'
import Button from './components/Button'

const family = {
  member1: {
    name: 'Sébastien',
    age: 25
  },
  member2: {
    name: 'Laura',
    age: 22
  },
  member3: {
    name: 'Patricia',
    age: 61
  },
  member4: {
    name: 'Iréné',
    age: 69
  }
}
class App extends Component {
  state = {
    family,
    isDescriptionShow: false
  }
  handleClick = (num, member) => {
      // console.log(this.state.family)
      // console.log({...this.state.family})
      //gives {this.state.family.member1, this.state.family.member2...}

      let family = { ...this.state.family }
      family[member].age += num
      this.setState({ family })
  }
  handleChange = (event, member) => {
    let family = { ...this.state.family }
    const name = event.target.value
    family[member].name = name
    this.setState({ family })
  }

  hideName = id => {
    let family = { ...this.state.family }
    family[id].name = 'X'
    this.setState({ family })
  }

  handleShowDescription = () => {
    const isDescriptionShow = !this.state.isDescriptionShow
    this.setState({ isDescriptionShow })
  }

  render () {
    const {title} = this.props
    const {family, isDescriptionShow} = this.state

    let description = null

    if (isDescriptionShow) {
      description = <strong> My father</strong>
    }

    const list = Object.keys(family)
      .map((member) => (
        <Fragment  key={member}>
          <Member
            handleChange={event => this.handleChange(event, member)}
            hideName={() => this.hideName(member)}
            handleShowDescription={() => this.handleShowDescription()}
            isDescriptionShow = {this.isDescriptionShow}
            age={family[member].age}
            name={family[member].name} >
          </Member>
          { description }
          <Button getOlder={() => this.handleClick(2, member)} />
        </Fragment>
      ))

    return (
        <div className="App">
          <h1>{title}</h1>
          { list }
        </div>
    )
  }
}

export default App
