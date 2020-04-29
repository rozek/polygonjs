import { TypedAssembler } from './BaseAssembler';
import { ShaderName } from './ShaderName';
import { TypedNode } from '../../_Base';
import { NodeContext } from '../../../poly/NodeContext';
import { NodeTypeMap } from '../../../containers/utils/ContainerMap';
export declare class TypedNodeTraverser<NC extends NodeContext> {
    private _assembler;
    private _gl_parent_node;
    private _leaves_graph_id;
    private _graph_ids_by_shader_name;
    private _outputs_by_graph_id;
    private _depth_by_graph_id;
    private _graph_id_by_depth;
    private _graph;
    private _shader_name;
    constructor(_assembler: TypedAssembler<NC>, _gl_parent_node: TypedNode<NC, any>);
    private reset;
    shader_names(): ShaderName[];
    input_names_for_shader_name(root_node: NodeTypeMap[NC], shader_name: ShaderName): string[];
    traverse(root_nodes: NodeTypeMap[NC][]): void;
    leaves_from_nodes(nodes: NodeTypeMap[NC][]): NodeTypeMap[NC][];
    nodes_for_shader_name(shader_name: ShaderName): NodeTypeMap[NC][];
    sorted_nodes(): NodeTypeMap[NC][];
    private find_leaves_from_root_node;
    private find_leaves;
    private set_nodes_depth;
    private set_node_depth;
}