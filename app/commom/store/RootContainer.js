import React from 'react'

const RootContainer = () => {
    return (
        <PageContainer>
            {this.props.children &&
                React.cloneElement(this.props.children, {
                    setHeader: this.setHeader,
                    setTitle: this.setTitle,
                    currentUser,
                    userRoleInfo,
                    organizationId,
                    organization: companyMap.get(organizationId),
                })
            }
        </PageContainer>
    )
}

export default RootContainer

const PageContainer = ({children}) => (
    <div className={style['page-container']}>
        {children}
    </div>
)