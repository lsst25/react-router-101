import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root.jsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader, action as contactAction } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit.jsx";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root />}
            loader={rootLoader}
            action={rootAction}
            errorElement={<ErrorPage />}
        >git a
            <Route errorElement={<ErrorPage />}>
                <Route index element={<Index />} />
                <Route
                    path="contacts/:contactId"
                    element={<Contact />}
                    loader={contactLoader}
                    action={contactAction}
                />
                <Route
                    path="contacts/:contactId/edit"
                    element={<EditContact />}
                    loader={contactLoader}
                    action={editAction}
                />
                <Route
                    path="contacts/:contactId/destroy"
                    action={destroyAction}
                />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <RouterProvider router={router}/>
        </DevSupport>
    </React.StrictMode>
);
