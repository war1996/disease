import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRoute = ({
    component: Component,
    path,
    exact,
    strict,
    sensitive,
    organizationId,
    ...rest
}) => (
    <Route
        {...{
            path,
            exact,
            strict,
            sensitive,
        }}
        render={({
            match,
            history,
            location,
            ...restProps
        }) => <Component
                    {...rest}
                    params={match.params}
                    router={history}
                    location={location}
                    // query={parseQueryParam(location)}
                    organizationId={organizationId}
                    {...restProps}
            />
        }
    />
)

export default PrivateRoute
