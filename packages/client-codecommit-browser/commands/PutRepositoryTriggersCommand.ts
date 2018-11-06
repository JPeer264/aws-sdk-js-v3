import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {PutRepositoryTriggers} from '../model/PutRepositoryTriggers';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutRepositoryTriggersInput} from '../types/PutRepositoryTriggersInput';
import {PutRepositoryTriggersOutput} from '../types/PutRepositoryTriggersOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class PutRepositoryTriggersCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutRepositoryTriggersInput,
    OutputTypesUnion,
    PutRepositoryTriggersOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutRepositoryTriggersInput,
        PutRepositoryTriggersOutput,
        Blob
    >();

    constructor(readonly input: PutRepositoryTriggersInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<PutRepositoryTriggersInput, PutRepositoryTriggersOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutRepositoryTriggers
        };

        return stack.resolve(
            handler<PutRepositoryTriggersInput, PutRepositoryTriggersOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}