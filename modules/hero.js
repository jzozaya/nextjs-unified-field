import React, {Fragment} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '@lib/serializers'

import VideoLoop from '@components/video-loop'
import Photo from '@components/photo'
import TwoColumns from '@components/two-columns'

const Hero = ({ data = {} }) => {
  const { content, bgType, photos, video } = data

  return (
    <Fragment>
      <section className="hero">
        {content && (
          <div className="hero--overlay">
            <div className="hero--content">
              <BlockContent
                renderContainerOnSingleChild
                className="rc"
                blocks={content}
                serializers={serializers}
              />
            </div>
          </div>
        )}

        {bgType === 'video' && (
          <>
            <div className="hero--bg is-desktop">
              <VideoLoop title={video.title} id={video.id} />
            </div>
            <div className="hero--bg is-mobile">
              <VideoLoop title={video.title} id={video.id} />
            </div>
          </>
        )}

        {bgType === 'photo' && (
          <>
            {photos?.desktopPhoto && (
              <Fragment>
                <Photo
                  photo={photos.desktopPhoto}
                  width={1600}
                  srcSizes={[800, 1000, 1200, 1600]}
                  sizes="100vw"
                  layout="fill"
                  className="hero--bg is-desktop"
                />
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-50" />
              
              </Fragment>
            )}
            {photos?.mobilePhoto && (
              <Fragment>
                <Photo
                  photo={photos.mobilePhoto}
                  width={800}
                  sizes="100vw"
                  layout="fill"
                  className="hero--bg is-mobile"
                />
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-50" />
              
              </Fragment>
            )}
          </>
        )}
      </section>
      <TwoColumns />
    </Fragment>

  )
}

export default Hero
