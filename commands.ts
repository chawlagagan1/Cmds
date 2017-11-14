/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.12.7.0 (NJsonSchema v9.10.6.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming



export type AddColumn = {
    RowId: string | null,
    Widths: ColumnWidths | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type ColumnWidths = {
    Xs: number | null,
    Sm: number | null,
    Md: number | null,
    Lg: number | null,
}

export type RootId = {
    Type: RootType | null,
    Id: number | null,
}

export enum RootType {
    Site = 0, 
    Theme = 1, 
}

export type DeleteColumn = {
    ColumnId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type MoveColumnToRow = {
    ColumnId: string | null,
    RowId: string | null,
    AnchorColumnId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type SetColumnClasses = {
    ColumnId: string | null,
    Classes: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type SetColumnWidths = {
    ColumnId: string | null,
    Widths: ColumnWidths | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type AddComponentInstance = {
    ColumnId: string | null,
    AnchorColumnElementId: string | null,
    SiteComponentId: number | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type MoveComponentInstanceToColumn = {
    ComponentInstanceId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type RemoveComponentInstance = {
    ComponentInstanceId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type AddComponentSlot = {
    ColumnId: string | null,
    AnchorColumnElementId: string | null,
    ThemeComponentId: number | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type MoveComponentSlotToColumn = {
    ComponentSlotId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type RemoveComponentSlot = {
    ComponentSlotId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type AddDynamicComponentArea = {
    NewDynamicComponentAreaId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type DeleteDynamicComponentArea = {
    DynamicComponentAreaId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type MoveDynamicComponentArea = {
    DynamicComponentAreaId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type CreateLayout = {
    Name: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
    NewLayoutId: string | null,
}

export type DeleteLayout = {
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type RenameLayout = {
    LayoutId: string | null,
    NewLayoutName: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type SetLayoutClasses = {
    LayoutId: string | null,
    Classes: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type ChangeDefaultLayout = {
    DefaultLayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type CreateSiteLayoutRoot = {
    SiteLayoutRootId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type CreateThemeLayoutRoot = {
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type UseLayoutOnPage = {
    PageId: number | null,
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type CreateRowInColumn = {
    NewRowId: string | null,
    ColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type CreateRowInSection = {
    NewRowId: string | null,
    SectionId: string | null,
    AnchorRowId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type DeleteRow = {
    RowId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type MoveRowToColumn = {
    RowId: string | null,
    FromColumnId: string | null,
    ToColumnId: string | null,
    AnchorColumnElement: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type MoveRowToSection = {
    RowId: string | null,
    ToSectionId: string | null,
    AnchorRowId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type SetRowClasses = {
    RowId: string | null,
    Classes: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type CloneSectionToLayout = {
    NewSectionId: string | null,
    SectionId: string | null,
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type CreateSection = {
    NewSectionId: string | null,
    LayoutId: string | null,
    Name: string | null,
    AnchorSectionId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type DeleteSection = {
    SectionId: string | null,
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type ReapplyThemeOnSite = {
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type ApplyThemeToSite = {
    ThemeLayoutRootId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type LinkSectionToLayout = {
    SectionId: string | null,
    LayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type MoveSectionToLayout = {
    SectionId: string | null,
    ToLayoutId: string | null,
    FromLayoutId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type RenameSection = {
    SectionId: string | null,
    NewName: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type SequenceSection = {
    SectionId: string | null,
    LayoutId: string | null,
    AnchorSectionId: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type SetSectionClasses = {
    SectionId: string | null,
    Classes: string | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export type SetSectionWidth = {
    SectionId: string | null,
    Width: SectionWidth | null,
    CorrelationId: string | null,
    RootId: RootId | null,
}

export enum SectionWidth {
    Full = 0, 
    Contained = 1, 
}


