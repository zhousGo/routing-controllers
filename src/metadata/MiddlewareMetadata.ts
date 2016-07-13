import {getContainer} from "../index";
import {MiddlewareMetadataArgs} from "./args/MiddlewareMetadataArgs";
import {MiddlewareInterface} from "../middleware/MiddlewareInterface";
import {ErrorHandlerInterface} from "../middleware/ErrorHandlerInterface";

export class MiddlewareMetadata {

    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    /**
     * Indicates if this middleware is global, thous applied to all routes.
     */
    isGlobal: boolean;

    /**
     * Object class of the middleware class.
     */
    target: Function;

    /**
     * Execution priority of the middleware.
     */
    priority: number;
    
    /**
     * Indicates if middleware must be executed after routing action is executed.
     */
    afterAction: boolean;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    
    constructor(args: MiddlewareMetadataArgs) {
        this.isGlobal = args.isGlobal;
        this.target = args.target;
        this.priority = args.priority;
        this.afterAction = args.afterAction;
    }

    // -------------------------------------------------------------------------
    // Accessors
    // -------------------------------------------------------------------------

    get instance(): MiddlewareInterface {
        return getContainer().get<MiddlewareInterface>(this.target);
    }

    get expressErrorHandlerInstance(): ErrorHandlerInterface {
        return getContainer().get<ErrorHandlerInterface>(this.target);
    }
    
}