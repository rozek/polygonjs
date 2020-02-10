import lodash_camelCase from 'lodash/camelCase';
import lodash_upperFirst from 'lodash/upperFirst';
enum PANEL_TYPE {
	ASSET = 'asset',
	CUSTOM_NODE_EDITOR = 'custom_node_editor',
	NETWORK = 'network',
	PARAM = 'param',
	PARAM_EDIT = 'param_edit',
	PERFORMANCE = 'performance',
	SPREADSHEET = 'spreadsheet',
	VIEWER = 'viewer',
}
const PANEL_TYPES: Array<PANEL_TYPE> = [
	PANEL_TYPE.ASSET,
	PANEL_TYPE.CUSTOM_NODE_EDITOR,
	PANEL_TYPE.NETWORK,
	PANEL_TYPE.PARAM,
	PANEL_TYPE.PARAM_EDIT,
	PANEL_TYPE.PERFORMANCE,
	PANEL_TYPE.SPREADSHEET,
	PANEL_TYPE.VIEWER,
];
const GUEST_PANEL_TYPES: Array<PANEL_TYPE> = [
	PANEL_TYPE.NETWORK,
	PANEL_TYPE.PARAM,
	PANEL_TYPE.PERFORMANCE,
	PANEL_TYPE.SPREADSHEET,
	PANEL_TYPE.VIEWER,
];

import {MultiplePanelProps} from 'src/editor/components/types/props';
import {ref, Ref, computed} from '@vue/composition-api';

export interface ISetupMultiplePanelPanels {
	set_panel_types_from_split_panel: (index: number) => void;
	set_panel_types_from_json: (new_panel_types: PANEL_TYPE[]) => void;
	set_current_panel_index: (index: number) => void;
	remove_tab: (index: number) => void;
	add_tab: (type: PANEL_TYPE) => void;
	tab_class_objects: Readonly<
		Ref<
			readonly {
				[x: string]: boolean;
				active: boolean;
			}[]
		>
	>;
	tab_delete_allowed: Readonly<Ref<boolean>>;
	current_panel_type: Readonly<Ref<string>>;
	available_panel_types: Readonly<
		Ref<
			readonly {
				id: PANEL_TYPE;
			}[]
		>
	>;
	panel_types: Ref<string[]>;
	current_panel_index: Ref<number>;
}

export function SetupMultiplePanelPanels(
	props: MultiplePanelProps,
	split_panel1: Ref<HTMLElement | null>,
	split_panel2: Ref<HTMLElement | null>
): ISetupMultiplePanelPanels {
	const current_panel_index = ref(props.init_properties.current_panel_index || 0);
	const panel_types = ref<string[]>(props.init_properties.panel_types || ['viewer', 'param', 'network']);

	const available_panel_types = computed(() => {
		let list = PANEL_TYPES;
		if (!props.scene_update_allowed) {
			list = GUEST_PANEL_TYPES;
		}
		return list.map((panel_type) => ({id: panel_type}));
	});

	const current_panel_type = computed(() => {
		let name = panel_types.value[current_panel_index.value];
		if (name == null) {
			name = panel_types.value[0];
		}
		return lodash_upperFirst(lodash_camelCase(name));
	});

	const tab_delete_allowed = computed(() => {
		return panel_types.value.length > 1;
	});

	const tab_class_objects = computed(() => {
		return panel_types.value.map((panel_type, i) => {
			return {
				active: i === current_panel_index.value,
				[panel_type]: true,
			};
		});
	});

	// functions
	function add_tab(type: PANEL_TYPE) {
		panel_types.value.push(type);
		set_current_panel_index(panel_types.value.length - 1);
	}
	function remove_tab(index: number) {
		if (tab_delete_allowed.value) {
			panel_types.value.splice(index, 1);

			if (current_panel_index.value >= panel_types.value.length) {
				current_panel_index.value = panel_types.value.length - 1;
			}
		}
	}

	function set_current_panel_index(i: number) {
		current_panel_index.value = i;
	}

	function set_panel_types_from_json(new_panel_types: PANEL_TYPE[]) {
		// this is slightly tricky, as I would also ensure that current_panel_index is correctly set
		// if !this.scene_update_allowed
		// 	panel_types = panel_types.filter (panel_type)=>
		// 		lodash_includes(GUEST_PANEL_TYPES, panel_type)

		// TODO: typescript check this
		panel_types.value = new_panel_types;
	}

	function set_panel_types_from_split_panel(index: number) {
		if (split_panel1.value && split_panel2.value) {
			const remaining_panel = index === 0 ? split_panel1.value : split_panel2.value;
			// TODO: typescript check this
			console.log('remaining_panel', remaining_panel);
			// panel_types.value = remaining_panel.$data.panel_types;
		}
	}

	return {
		set_panel_types_from_split_panel,
		set_panel_types_from_json,
		set_current_panel_index,
		remove_tab,
		add_tab,
		tab_class_objects,
		tab_delete_allowed,
		current_panel_type,
		available_panel_types,
		panel_types,
		current_panel_index,
	};
}