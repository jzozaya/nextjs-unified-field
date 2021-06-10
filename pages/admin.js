import React from 'react'

import { getStaticPage, modules } from '@lib/api'

import { Module } from '@modules/index'
import AppDashboard from '@modules/dashboard'
import PlatformLayout from '@components/platform-layout'

const Dashboard = ({ data }) => {
  const { site, page } = data

  return (
    <PlatformLayout site={site} page={page}>
      <AppDashboard/>
    </PlatformLayout>
  )
}

export async function getStaticProps({ preview, previewData }) {
  const pageData = await getStaticPage(
    `
    *[_type == "homePage"] | order(_updatedAt desc)[0]{
      hasTransparentHeader,
      modules[]{
        ${modules}
      },
      seo
    }
  `,
    {
      active: preview,
      token: previewData?.token,
    }
  )

  return {
    props: {
      data: pageData,
    },
  }
}

export default Dashboard
