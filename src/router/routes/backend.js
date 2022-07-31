import { lazy } from "react";
import { ROLES } from "../../utility/app.constant";
const backendRoutes = [

    {
        pathName: '/dashboard',
        component: lazy(() => import('../../views/backend/dashboard')),
        layout: 'Backend',
        permissions: [ROLES.admin],
        protected: false

    }
]

export default backendRoutes;