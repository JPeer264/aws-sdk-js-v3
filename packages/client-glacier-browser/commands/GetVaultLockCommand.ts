import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetVaultLock} from '../model/GetVaultLock';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetVaultLockInput} from '../types/GetVaultLockInput';
import {GetVaultLockOutput} from '../types/GetVaultLockOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class GetVaultLockCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetVaultLockInput,
    OutputTypesUnion,
    GetVaultLockOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetVaultLockInput,
        GetVaultLockOutput,
        Blob
    >();

    constructor(readonly input: GetVaultLockInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<GetVaultLockInput, GetVaultLockOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetVaultLock
        };

        return stack.resolve(
            handler<GetVaultLockInput, GetVaultLockOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}