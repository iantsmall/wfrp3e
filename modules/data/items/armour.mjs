import Trapping from "./trapping.mjs";

/** @inheritDoc */
export default class Armour extends Trapping
{
	/** @inheritDoc */
	static LOCALIZATION_PREFIXES = ["TRAPPING", "ARMOUR"];

	/** @inheritDoc */
	static defineSchema()
	{
		const fields = foundry.data.fields;

		return Object.assign({
			defenceValue: new fields.NumberField({initial: 0, integer: true, min: 0, nullable: false, required: true}),
			equipped: new fields.BooleanField(),
			soakValue: new fields.NumberField({initial: 0, integer: true, min: 0, nullable: false, required: true}),
			type: new fields.StringField({
				choices: Armour.TYPES,
				initial: Object.keys(Armour.TYPES)[0],
				required: true
			})
		}, super.defineSchema());
	}

	static TYPES = {
		armour: "ARMOUR.TYPES.armour",
		shield: "ARMOUR.TYPES.shield"
	};
}
