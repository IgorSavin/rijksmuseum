import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class ImageResults extends Component {
  render() {
    let imageListContent;
    const {results} = this.props;

    if(results) {
      imageListContent =(
        <GridList cols={3}>
        {results.map(rslt =>(
          <GridTile
          title={rslt.title}
          key={rslt.id}
          ationIcon={
            <IconButton>
              <ZoomIn color="white"/>
            </IconButton>
          }
          >
            <img src={rslt.webImage.url} alt=""/>
          </GridTile>
        ))}
        </GridList>
      )
    }else{
      imageListContent = null;
    }

    return (
      <div>
        {imageListContent}
      </div>
    )
  }
}

ImageResults.propTypes ={
  results: PropTypes.array.isRequired
}

export default ImageResults;