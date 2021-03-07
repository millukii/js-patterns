const auditProps = {
    createdAt:  { default: new Date },
    updatedAt: { default: new Date },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updateBy: { type: Schema.Types.ObjectId, ref: 'User' },
}

const Model = defaultProps => {
    return (name, props) => {
        const schema = moongose.schema({
            ...defaultProps,
            ...props,
        })

        return moongose.model(name, schema)
    }
}

export const withAudit = Model(auditProps)


withAudit('Product', {
    name: String,
    desc: String,
})