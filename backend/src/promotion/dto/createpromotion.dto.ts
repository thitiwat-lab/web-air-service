export class PromotionCreateDto {
    readonly promotion_name: string;
    readonly description: string;
    readonly discount: string;
    readonly start_date:Date;
    readonly end_date:Date
}