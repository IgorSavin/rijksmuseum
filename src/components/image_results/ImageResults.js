import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  }

  handleOpen = rslt => {
    this.setState({ open: true, currentImg: rslt })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    let imageListContent
    const { results } = this.props

    if (results) {
      imageListContent = (
        <GridList cols={3}>
          {results.map(rslt => (
            <GridTile
              title={rslt.title}
              key={rslt.id}
              actionIcon={
                <IconButton onClick={this.handleOpen}>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={rslt.webImage.url} alt="" style={{ width: '25%' }} />
            </GridTile>
          ))}
        </GridList>
      )
    } else {
      imageListContent = null
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ]

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
        </Dialog>
      </div>
    )
  }
}

ImageResults.propTypes = {
  results: PropTypes.array.isRequired
}

export default ImageResults
