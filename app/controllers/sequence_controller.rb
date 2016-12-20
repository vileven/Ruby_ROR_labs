class SequenceController < ApplicationController
  def input
  end

  def view
    @numbers = params[:str].split

    # if @numbers.size != 10
    #   @result = ["Ошибка: размер массива должен быть равен 10 элементам"]
    #   @index = -1
    #   return
    # end

    prev = 0
    @result = []
    @numbers.map! { |x| x.to_i }.each_index do |i|
      if @numbers[i] <= @numbers[i - 1] and (i > 0)
        @result << @numbers[prev...i]
        prev = i
      end
    end

    @result << @numbers[prev...@numbers.length]
    @max_seq = @result.max {|a,b| a.length <=> b.length }

    @final_res = {output_s: @result, source_s: @numbers, max_s: @max_seq}

    respond_to do |format|
      format.html
      format.json do
        render json:
                   {type: @final_res.class, value: @final_res}
      end
    end
  end

end
